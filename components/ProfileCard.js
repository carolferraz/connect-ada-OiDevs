class ProfileCard {
  profile;

  constructor() {
    this.profileCard = document.createElement('div');
    this.profile = [];
  }

  profileData(profileImg, profileName, profileProf, profileFollowing) {
    this.profile.push({
      profileImg,
      profileName,
      profileProf,
      profileFollowing,
    });
  }

  render() {
    const profileCard = document.createElement('div');
    profileCard.classList.add('profileCard');
    const rightText = document.createElement('div');
    rightText.classList.add('rightText');
    const profilePhoto = document.createElement('div');
    profilePhoto.classList.add('profilePhoto');
    const profilePhotoImg = document.createElement('img');
    profilePhotoImg.classList.add('profilePhotoImg');
    const profileText = document.createElement('div');
    profileText.classList.add('profileText');
    const profileTitle = document.createElement('span');
    profileTitle.classList.add('profileTitle');
    const profileProf = document.createElement('span');
    profileProf.classList.add('profileProf');
    const profileButton = document.createElement('button');
    profileButton.classList.add('profileButton');
    const leftText = document.createElement('div');
    leftText.classList.add('leftText');
    const followers = document.createElement('span');
    followers.classList.add('followers');
    const followersNumber = document.createElement('span');
    followersNumber.classList.add('followersNumber');

    console.log(this.profile);
    profilePhotoImg.setAttribute('src', this.profile[0].profileImg);
    profileButton.innerHTML =
      '<img src="/assets/icon-button-profile-card.svg" alt="button"/> Editar seu perfil';
    followers.innerHTML = 'Seguindo';
    profileTitle.innerHTML = this.profile[0].profileName;
    profileProf.innerHTML = this.profile[0].profileProf;
    followersNumber.innerHTML = this.profile[0].profileFollowing;

    profilePhoto.append(profilePhotoImg);
    profileText.append(profileTitle, profileProf, profileButton);
    rightText.append(profilePhoto, profileText);
    leftText.append(followers, followersNumber);
    profileCard.append(rightText, leftText);
    this.profileCard.append(profileCard);

    document.querySelector('main').append(this.profileCard);
  }
}

export default ProfileCard;
