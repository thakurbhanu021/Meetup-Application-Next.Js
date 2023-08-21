import { MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "First Meetup",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbi_4-mbmDG3SOE8P5OleU7PiJWti7zypc2g&usqp=CAU",
//     address: "Some address 10, 12345 Some City",
//     description: "This is First meetup!",
//   },
//   {
//     id: "m2",
//     title: "A Second Meetup",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbi_4-mbmDG3SOE8P5OleU7PiJWti7zypc2g&usqp=CAU",
//     address: "Some address 10, 12345 Some City",
//     description: "This is a second meetup!",
//   },
// ];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// export async function getServerSideProps(context){
//     const req = context.req;
//     const res = context.res;

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

export async function getStaticProps(){

    const client = await MongoClient.connect('mongodb+srv://BhanuPratap:8979465461India@cluster0.utzcfrg.mongodb.net/meetups?retryWrites=true&w=majority');

    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map((meetup)=> ({
                    title: meetup.title,
                    image: meetup.image,
                    address: meetup.address,
                    id: meetup._id.toString(),
            }))
        },
        revalidate: 1
    }
}

export default HomePage;
