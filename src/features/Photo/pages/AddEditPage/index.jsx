import Banner from "components/Banner";
import Images from "constants/images";
import PhotoForm from "features/Photo/components/PhotoForm";
import React from "react";
import "./styles.scss";

export default function AddEditPage(props) {
  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo" backgroundUrl={Images.PINK_BG} />
      <div className="photo-edit__form">
        <PhotoForm onSubmit={value => console.log("Form sumbit: ", value)} />
      </div>
    </div>
  );
}
