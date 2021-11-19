import axios from "axios";

function Home({billionaireList}) {

  return (
    <div>Heyo</div>
  )
}

export async function getStaticProps() {
  const billionaireList = await axios.get(
    "https://forbes400.herokuapp.com/api/forbes400?limit=10"
  ).then((response) => {
      return response.data
  }).catch((error)=>{
      return {
          status: '400',
          message: error
      }
  })

  return {
    props: {
      billionaireList,
    },
  }
}

export default Home