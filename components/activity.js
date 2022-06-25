import { activities } from "../data/activities";
import ActivityCard from "./activityCard";

const styles = {
  activity: `blue-glassmorphism w-96 h-screen p-5 py-10 text-white`,
  title: `flex items-center justify-between mb-10 text-[#9c64fb]`,
  profileAvatarContainer: `w-14 h-14 rounded-full -ml-2 mr-3`,
  activityCard: `flex mb-6`,
};

const Activity = () => {
  return (
    <div className={styles.activity}>
      <h2 className="text-center text-[#9c64fb]"> Socials Dapps</h2>
      <div className="mb-8 gap-3 flex flex-1 w-64 flex-row  p-2 rounded-xl">
        <img
          className="rounded-full bg-white"
          title="Pixel"
          src="assets/pixel.svg"
          alt=""
          width={30}
          height={30}
        />
        <img
          className="rounded-full bg-white"
          title="aether"
          src="assets/aether.png"
          alt=""
          width={30}
          height={30}
        />
        <img
          src="assets/steemit.png"
          className="rounded-full bg-white"
          title="steemit"
          alt=""
          width={30}
          height={30}
        />
        <img
          className="rounded-full bg-white"
          title="torum"
          src="assets/torum.png"
          alt=""
          width={30}
          height={30}
        />
        <img
          className="rounded-full bg-white"
          title="sapien"
          src="assets/sapien.jpeg"
          alt=""
          width={30}
          height={30}
        />
        <img
          className="rounded-full bg-white"
          title="indorse"
          src="assets/indorse.png"
          alt=""
          width={30}
          height={30}
        />
      </div>
      <div className={styles.title}>
        Friend Activity
        <img src="assets/friend.svg" alt="" />
      </div>

      <div className="mb-10">
        {activities.map((activity, index) => {
          return (
            <ActivityCard
              avatar={activity.avatar}
              title={activity.title}
              subTitle={activity.subTitle}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Activity;
