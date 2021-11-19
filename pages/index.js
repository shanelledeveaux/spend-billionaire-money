import axios from "axios";
import Billionaire from "../components/Billionaire";
import { getAge, toBillions } from "../lib/billionaire";
import homeStyles from "../styles/Home.module.css"

const Home = ({ billionaireList }) => {
  const billionaire = billionaireList?.map((billionaire) => {
    const { person } = billionaire;

    return (
      <Billionaire
        key={billionaire.position}
        photo={person.squareImage}
        name={person.name}
        rank={billionaire.rank}
        age={getAge(billionaire.birthDate)}
        netWorth={toBillions(billionaire.finalWorth)}
      />
    );
  });

  return (
      <div className={homeStyles.container}>{billionaire}</div>
  );
};

export async function getStaticProps() {
  const billionaireList = await axios
    .get("https://forbes400.herokuapp.com/api/forbes400?limit=10")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return {
        status: "400",
        message: error,
      };
    });

  return {
    props: {
      billionaireList,
    },
  };
}

export default Home;
