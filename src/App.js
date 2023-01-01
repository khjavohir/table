import Table from "./components/table";
import img1 from "./img/img1.png";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";

const App = () => {
  const cards = [
    {
      id: 1,
      title: "Mountain View",
      desc: "Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains",
      img: img1,
      btn: "View Trips"
    },
    {
      id: 2,
      title: "To the Beach",
      img: img2,
      desc: "Plan your next beach trip with these fabulous destinations",
      btn: "View Trips"
    },
    {
      id: 3,
      title: "Desert Destination",
      img: img3,
      desc: "It's the desert you've always dreamed of",
      btn: "View Trips"
    },
    {
      id: 4,
      title: "Explore the Galaxy",
      img: img4,
      desc: "Seriously, straight up, just blast off into outer space today",
      btn: "View Trips"
    },
  ];

  return (
    <div>
      <Table cards={cards} />
    </div>
  );
};

export default App;
