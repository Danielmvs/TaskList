class Email {
    construtor(email){
        
    }

    static valideEmailRegex(email){
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email)
       
    }
}
