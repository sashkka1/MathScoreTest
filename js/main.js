"use strict";

function Use_work() {
    const tg = window.Telegram.WebApp;
    tg.initDataUnsafe.user.language_code
    tg.initDataUnsafe.user.username
    tg.themeParams.bg_color
    tg.colorScheme
    tg.initDataUnsafe.auth_date
}

function how_tma(){
    let count =1;
    let newcount;
    window.Telegram.WebApp.CloudStorage.setItem("count", count);
    count =0;
    window.Telegram.WebApp.CloudStorage.getItem("count", (err, newcount) => {
        console.log(`вывод успешн ${newcount}`);
        count = newcount;
    });
    // window.Telegram.WebApp.CloudStorage.removeItem("count")
    // count = count + 1;
    // window.Telegram.WebApp.CloudStorage.setItem("count", count);

    // window.Telegram.WebApp.CloudStorage.setItem('initDat', JSON.stringify(count))

    // window.Telegram.WebApp.CloudStorage.getItem('initDat').then((data, err) => {
    //     if(data && !err) {
    //     console.log(JSON.parse(data))
    //     } else {
    //     console.log(err)
    //     }
    //     })
}

function getname() {
    let name = localStorage.getItem('name');
    return name;
}
function setname() {
    let name = localStorage.setItem('name', name);
}

function cloud_i(){
    let count= 11;
    let newcount;
    const tg = window.Telegram.WebApp.CloudStorage;

    tg.setItem("count", count);
    newcount = getItem("count");
}

function get(){
    const tg = window.Telegram.WebApp;
    // console.log(`tg.initDataUnsafe.receiver.is_premium ${tg.initDataUnsafe.receiver.is_premium}`);
    // console.log(`tg.initDataUnsafe.receiver.is_premium ${tg.initDataUnsafe.user.is_premium}`);
    // console.log(`tg.initDataUnsafe.receiver.photo_url ${tg.initDataUnsafe.receiver.photo_url}`);
    // console.log(`tg.initDataUnsafe.receiver.photo_url ${tg.initDataUnsafe.user.photo_url}`);
    // console.log(`tg.initData ${}`);
    // console.log(`tg.initData ${tg.initData}`);
    // console.log(`tg.initData ${tg.initData}`);
    // console.log(`tg.initData ${tg.initData}`);
    // console.log(`tg.initData ${tg.initData}`);
    // console.log(`tg.initData ${tg.initData}`);

}


window.onload = function () {
    // UserUsername();
    // UserLanguage();
    const tg = window.Telegram.WebApp;
    const user = window.Telegram.WebApp.initDataUnsafe.user;


    document.getElementById('notificationp').innerHTML = "Test 7";



    // console.log(`user.username ${user.username}`);
    // how_tma()
    // console.log(`user.username ${user.username}`);

    let name= 'aaaaaaaaaa'
    setname();
    console.log(`name до ${name}`);
    name = getname();
    console.log(`name после ${name}`);


}
