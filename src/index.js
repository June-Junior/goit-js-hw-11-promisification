
// ______________________________________Task 3.1__________________________________________________________________________
// Напиши функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд. 
// Значением исполнившегося промиса должно быть то кол-во миллисекунд которое передали во время вызова функции delay.

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

