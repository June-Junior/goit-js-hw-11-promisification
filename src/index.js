
// ______________________________________Task 3.1__________________________________________________________________________
// Напиши функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд. 
// Значением исполнившегося промиса должно быть то кол-во миллисекунд которое передали во время вызова функции delay.

// const { resolve, reject } = require("core-js/fn/promise"); - откуда это постоянно берется???

const delay = ms => {
  // Твой код
  const pause = ms;
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`${ms}`);
  }, pause);  
  });
};

const logger = time => console.log(`Resolved after ${time}ms`);

// Вызовы функции для проверки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms


const delayPlus = msPlus => {
  
  return new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`${msPlus}`);
  }, msPlus);  
  });
};

const loggerPlus = timePlus => console.log(`Resolved after ${timePlus}ms`);


delayPlus(2500).then(loggerPlus); 
delayPlus(3000).then(loggerPlus); 
delayPlus(3500).then(loggerPlus);


// _____________________________________Task 3.2_________________________________________________________________________

// Перепиши функцию toggleUserState() так, чтобы она не использовала callback-функцию callback, а принимала всего два параметра allUsers и userName и возвращала промис.

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
  return new Promise((resolve, reject) => {
      const updatedUsers = allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user,
    );
  
      resolve(updatedUsers);
  })
  
};

const loggerSecond = updatedUsers => console.table(updatedUsers);

/*
 * Сейчас работает так
 */
// toggleUserState(users, 'Mango', loggerSecond);
// toggleUserState(users, 'Lux', loggerSecond);

/*
 * Должно работать так
 */
toggleUserState(users, 'Mango').then(loggerSecond);
toggleUserState(users, 'Lux').then(loggerSecond);


// _____________________________________Task 3.3_________________________________________________________________________

// Перепиши функцию makeTransaction() так, чтобы она не использовала callback-функции onSuccess и onError, 
// а принимала всего один параметр transaction и возвращала промис.

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction) => {
  const time = randomIntegerFromInterval(200, 500);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;
  
      if (canProcess) {
        resolve({transaction, time});
      } 
        reject(transaction.id);
      
    }, time);
  }); 
};

const logSuccess = ({transaction, time}) => {
  console.log(`Transaction ${transaction.id} processed in ${time}ms`);
};

const logError = transaction => {
  console.warn(`Error processing transaction ${transaction}. Please try again later.`);
};

makeTransaction({ id: 70, amount: 150 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 71, amount: 230 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 72, amount: 75 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 73, amount: 100 })
  .then(logSuccess)
  .catch(logError);