import User from "../models/User.class.mjs";
import database from "../models/DataBase.class.mjs";

class FollowerCard {

  constructor(user) {
    this.section = document.createElement("section");
    document.querySelector("main").append(this.section);

    this.divFollower = document.createElement("div");
    this.divFollower.setAttribute("class", "follower");
    this.section.append(this.divFollower);

    this.a = document.createElement("a");
    this.a.setAttribute("class", "profile-follower");
    this.divFollower.append(this.a);

    this.img = document.createElement("img");
    this.img.setAttribute("class", "img-user");
    this.img.setAttribute("src", /*user.image*/ "../../assets/profile-pic-davon.svg");
    this.a.append(this.img);

    this.divText = document.createElement("div");
    this.divText.setAttribute("class", "text-profile");
    this.a.append(this.divText);

    this.pName = document.createElement("p");
    this.pName.setAttribute("class", "name-profile");
    this.divText.append(this.pName);
    // document.getElementsByClassName("name-profile")[0].innerText = user.name;
    this.pName.innerText = user.name;

    this.pRole = document.createElement("p");
    this.pRole.setAttribute("class", "role-profile");
    this.divText.append(this.pRole);
    // document.getElementsByClassName("role-profile")[0].innerText = user.role;
    this.pRole.innerText = user.role;

    this.divBtn = document.createElement("div");
    this.divBtn.setAttribute("class", "align-follow-btn");
    this.divFollower.append(this.divBtn);
    
    this.button = document.createElement("button");
    this.button.setAttribute("class", "follow-btn");
    this.divBtn.append(this.button);
    this.button.innerText = "Seguir";
  }


//   buttonFollowerActive (){
//     const followButton = document.querySelector("to-follow-button");
//     followButton.addEventListener("click", transformFollowButton());
//  }

//     transformFollowButton (){
//         document.querySelector("follow-btn").setAttribute("class", "unfollow-btn");
//     }
}

export default FollowerCard;
