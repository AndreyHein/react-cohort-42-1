// 1 шаг - создание компонента
import Button from "../../components/Button/Button";
import "./styles.css";

function Lesson_02() {
  const user = {
    firstName: "John",
    lastName: "Johnson",
    age: 40,
    job: "Frontend Developer",
    isAdmin: true,
    avatarURL:
      "https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_small/6aofsvaglm_Medium_WW226365.jpg",
  };

  const getFullName = () => {
    return `${user.firstName} ${user.lastName}`;
  };

  return (
    <div className="lesson02_wrapper">
      <h1 className="page-title">Lesson 02</h1>
      <div className="button-control">
        <Button />
      </div>
      <div className="button-control">
        <Button />
      </div>
      <div className="button-control">
        <Button />
      </div>
      <div className="card-contanier">
        <p className="card-info">User card</p>
        <img src={user.avatarURL} className="avatar" alt="User Avatar" />
        <p className="card-info">Full Name: {getFullName()}</p>
        <p className="card-info">Age: {user.age}</p>
        <p className="card-info">Job: {user.job}</p>
        <p className="card-info">
          Role: {user.isAdmin ? "Admin" : "Not Admin"}
        </p>
      </div>
    </div>
  );
}

// 2 шаг - Экспортировать компонент из файла наружу
export default Lesson_02;
