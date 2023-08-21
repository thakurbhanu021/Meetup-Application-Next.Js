import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image={
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbi_4-mbmDG3SOE8P5OleU7PiJWti7zypc2g&usqp=CAU"
      }
      title={"Meetup"}
      address={"some address"}
      description={"some description"}
    />
  );
};

export const getStaticPaths = async() => {
    return {
        fallback : false,
        paths: [
            {
                params: {
                    meetupId: 'm1',
                }
            },
            {
                params: {
                    meetupId: 'm2',
                }
            }
        ]
    }
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbi_4-mbmDG3SOE8P5OleU7PiJWti7zypc2g&usqp=CAU",
        title: "Meetup",
        address: "some address",
        description: "some description",
      },
    },
  };
};

export default MeetupDetails;
