export default function validate_general(fields){
    let values = Object.values(fields);
    let error = false
    for(let inx =0;inx<values.length;inx++){
        if(values[inx] == ''){error=true;return(error);}
    }
    return error;
    // let email_rex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
    // if(email_rex.test(fields.off_email) && (fields.gender == 'MALE' || fields.gender == 'FEMALE')){
    //     return false
    // }
}
