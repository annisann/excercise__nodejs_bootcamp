function getRandomPassword(characters:any):any {
    try {
        if (!isNaN(parseInt(characters))) { // bisa +characters
            throw new Error("Value must be a character")
        } else if (characters.length < 6){
            throw new Error("Length must more than 6")
        } else {
            let password:string = ''
            let randomNumbers:string = ''
            for (let i=0; i<=3; i++) {
                password += String.fromCharCode(characters.charCodeAt(i+Math.floor(Math.random()*3)))  
                randomNumbers += Math.floor(Math.random()*9)
                console.log(password,randomNumbers)
            }
            return `${password}${randomNumbers}`
        }
        
    } catch (error:any) {
        return error.message
    }
}