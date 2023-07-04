import Image from "next/image";
import sampleProfile from "@/images/sample-image.jpg";
import UserCardStyle from "@/styles/UserCard.module.scss";

const UserCard = () => {
  return (
    <div className={UserCardStyle.user_card}>
      <div className={UserCardStyle.profile_container}>
        <Image
          src={sampleProfile}
          width={100}
          height={100}
          className={UserCardStyle.profile_image}
        />
      </div>
      <div className={UserCardStyle.user_info}>
        <div>
          <p>Name:</p>
          <p>Ronel Florida</p>
        </div>
        <div>
          <p>Email:</p>
          <p>sample@email.com</p>
        </div>
        <div>
          <p>Contact #:</p>
          <p>09345456768</p>
        </div>
        <div>
          <p>Department:</p>
          <p>Developer Department</p>
        </div>
        <div>
          <p>Role:</p>
          <p>Front-End Developer</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
