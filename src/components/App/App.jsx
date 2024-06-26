import Profile from '../Profile/Profile';
import "modern-normalize";
import userData from '../../userData.json'; 
import friends from '../../friends.json';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from '../../transactions.json'

export default function App() {
  return (
  <> 
  <h2>Завдання 1 - Профіль соціальної мережі</h2>
  
      <div>
      <Profile userData={userData} />
      </div>

      <h2>Завдання 2 - Список друзів</h2>  
 
      <FriendList items={friends} />

      <h2>Завдання 3 - Історія транзакцій</h2>

      <TransactionHistory items={transactions} />
  </>
  )
}