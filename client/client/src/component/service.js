import axios from 'axios';


//הכנסת שם משתמש וסיסמא ומקבלים את העובד 
export async function checkPermission({email,password}){
    try{  
         await axios.post(`http://localhost:4001/checkPermission/${email}/${password}`).then(
           res=>{
                 ///////לעשות בדיקה אם הוא מנהל 
                console.log('employ'+ JSON.stringify(res));
                localStorage.setItem('userId',res.data.user.userId,'email',res.data.email,'password',res.data.user.password)
                return res.data;
           }
        )
    }catch(err){
        console.log(err);
    }
}

//רשימת עובדים 
export async function getAllEmployed() {
    try {
        const res = await axios.get(`http://localhost:4001/getAllEmployed`)
        console.log('listEmployed' +  JSON.stringify(res));
        return res.data
    } catch (error) {
        console.log(error);
    }
}


//קבלת עובד עפ"י מזהה
export async function getEmployedById(userId){
    await axios.get(`http://localhost:4001/getEmployedById/${userId}`).then(
       res=>{
           console.log('employ'+ JSON.stringify(res));
           localStorage.setItem('userId',res.data.user.userId)
           return res.data;
       },
       err=>{
           console.log(err);
       }
   )
}


//הוספת עובד חדש-הרשמה למערכת
export async function setNewEmployed(user){
    try{
        await axios.post(`http://localhost:4001/setNewEmployed`,user).then(
            res=>{
                 console.log('employ'+ JSON.stringify(res));
                 localStorage.setItem('userId',res.data.user.userId,'email',res.data.email,"password",res.data.user.password)
                 return res.data;
            } 
        )    
    }catch(err){
       console.log(err);
    }
}

//עידכון פרטי עובד
export async function updateEmployed(user){
    try{
        const userId = localStorage.getItem("userId") 
          await axios.post(`http://localhost:4001/updateEmployed/${userId}`,user).then(
            res=>{
            console.log('update employ'+ JSON.stringify(res));
            return res.data;
            })
    }catch(err){
        console.log(err);
    }
}
