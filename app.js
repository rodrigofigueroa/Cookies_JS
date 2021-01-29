
const SetCookie = (cname, cvalue, exdays) => {
    let d = new Date()
    d.setTime(d.getTime() + (exdays*24*60*60*1000))
    document.cookie = `${cname}=${cvalue}; expires=${d.toUTCString()}; path=/;`
}

const getCookie = cname => {
    let name = `${cname}=`,
        decodeCookie = decodeURIComponent(document.cookie),
        ca =  decodeCookie.split(';'),
        finalName = '';
    
    ca.forEach(item => {          
            if(`${name}${item.substr(name.length + 1)}` === item.substring(1)){
                finalName =  item.substr(name.length + 1)
            }
        })

    if(finalName !== ''){
        return finalName
    }else{
        return ''
    }
        
}

const checkCookie = nameOfcookie => {
    let username = getCookie(nameOfcookie);
    if(username !== ''){
        console.log('welcome back ' + username)
    }else{
        username = prompt('please enter your name', '')
            if(username !== '' && username !== null){
                SetCookie(nameOfcookie, username, 365)
            }
    }

} 

const startCookie = () => {
    checkCookie('name')    
}

window.addEventListener('load', () => {
    startCookie()
});