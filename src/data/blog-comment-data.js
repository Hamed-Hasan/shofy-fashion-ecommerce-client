import user_1 from '@assets/img/users/user-2.jpg';
import user_2 from '@assets/img/users/user-3.jpg';
import user_3 from '@assets/img/users/user-4.jpg';


// blog comment data 
const comment_data = [
  {
    id: 1,
    user: user_1,
    name: 'Lance Bogrol',
    date: '12 April, 2023 at 3.50pm',
    desc: 'By defining and following internal and external processes, your team will have clarity on resources to  attract and retain customers for your business.',
    children:{
      user: user_2,
      name: 'Dasy Lily',
      date: '15 April, 2023 at 5.50pm',
      desc: 'By defining and following internal and external processes, your team will have clarity on resources to  attract and retain customers for your business.',
    }
  },
  {
    id: 2,
    user: user_3,
    name: 'Shahnewaz Sakil',
    date: '20 April, 2023 at 3.50pm',
    desc: 'By defining and following internal and external processes, your team will have clarity on resources to  attract and retain customers for your business.',
  },
]

export default comment_data;