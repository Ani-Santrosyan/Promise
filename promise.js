function applyForVisa(documents){
    console.log('Oбработка заявления...');
    let promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            Math.random() > .5 ? resolve({}) : reject('Б визе отказано: нехватка документов');
            resolve();
        }, 2000);
    });
    return promise;
}

function getVisa(visa){
    console.info('Виза получена')
        return new Promise(function(resolve, reject){
           setTimeout(() => resolve(visa), 2000) ;
        });
}

function bookHotels(visa){
    console.log(visa);
    console.log("Бронируем отель");
    return Promise.resolve(visa);
        // Promise.reject('Нет мест');
}

function buyTickets(booking){
    console.log('Покупаем билеты');
    console.log('Бронь:', booking);
}

applyForVisa({})
    .then(getVisa)
    .then(bookHotels)
    .then(buyTickets)
    .catch(error => console.error(error));

 