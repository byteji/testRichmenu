const btn = document.getElementById('btn');
const liffId = '1655970813-BbLj9d3v';
let userId = '';

function main(){
    // 1.liff init
    
    liff.init({liffId: liffId});
    liff.ready.then(() => { // จะทำงานเมื่อ init เสร็จ
        if(!liff.isLoggedIn()){ //  if เช้คล้อคอินไหม
            liff.login();
        }      
            // 2.get profile เก็บค่าuserId
        liff.getProfile().then((profile) => {            
            userId = profile.userId;
            console.log(profile);
        });
    });    
}

main()

async function send(e){     
    e.preventDefault();
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;    
    // 3. axios post data
    try {
        const result = await axios.post('http://localhost:3000/api/v1/change-richmenu', {
            firstname: firstname,
            lastname: lastname,
            email: email,
            userId: userId
        });        
        if(result.status == 200){
            console.log("closeWindow");
            // liff.closeWindow();
        }
    } catch (error) {
        console.log(error);
    }        
}