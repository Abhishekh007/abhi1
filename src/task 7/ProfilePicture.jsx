import React, { useRef, useState } from "react";
import "./ProfilePicture.css";
export default function ProfilePicture() {
    const fileInputRef = useRef(null);
    const [image, setImage] = useState(
        "https://via.placeholder.com/200"
    );
    const [likes, setLikes] = useState(0);
    const handleUploadClick = () => {
        fileInputRef.current.click();
    };
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setImage(imageURL);
        }
    };
    const handleLike = () => {
        setLikes(likes + 1);
    };
    return (
        <div className="profile-page">
            <div className="profile-card">
                <h1>My Profile</h1>
                <div className="profile-image-container">
                    <img
                        src={image}
                        alt="Profile"
                        className="profile-image"
                    />
                </div>
                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    className="file-input"
                />
                <button
                    className="upload-button"
                    onClick={handleUploadClick}
                >
                    Upload Image
                </button>
                <div className="like-section">
                    <button
                        className="like-button"
                        onClick={handleLike}
                    >
                        ❤️ Like
                    </button>
                    <p>
                        Likes: {likes}
                    </p>
                </div>
            </div>
        </div>
    );
}