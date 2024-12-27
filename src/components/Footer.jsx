import React from 'react';
import { GiPineTree } from "react-icons/gi";
import { GiFruitTree } from "react-icons/gi";
import { GiPalmTree } from "react-icons/gi";
import { BiSolidTree } from "react-icons/bi";
import { BiSolidTreeAlt } from "react-icons/bi";
import { BsTreeFill } from "react-icons/bs";

const Footer = () => {
    return (
        
        <div
        style={{
            position: 'fixed',
            bottom: 0,
            right: 0,
            width: "100%",
            zIndex: -999,
        }}
        >

            <div
                style={{
                    backgroundImage: 'url(https://raw.githubusercontent.com/Forest-Fire-Research/website-assets/main/assets/backgrounds/forest-2.svg)',
                    backgroundSize: 'auto 10rem',
                    backgroundRepeat: 'repeat no-repeat',
                    // backgroundColor: 'blue',
                    height: '10rem',
                    filter: 'invert(5%) sepia(72%) saturate(460%) hue-rotate(78deg) brightness(91%) contrast(84%)',
                }}
                >
            </div>
            <div
                style={{
                    backgroundImage: 'url(https://raw.githubusercontent.com/Forest-Fire-Research/website-assets/main/assets/backgrounds/forest-1.svg)',
                    backgroundSize: 'auto 14rem',
                    backgroundRepeat: 'repeat no-repeat',
                    height: '14rem',
                    marginTop: '-12rem',
                    filter: 'invert(15%) sepia(72%) saturate(460%) hue-rotate(78deg) brightness(91%) contrast(84%)',
                }}
            >
            </div>        
            {/* <div
            style={{
            marginTop: '-10rem',
            display: 'flex',
            justifyContent: 'space-evenly',
            width: '100%',
            zIndex: '999',
            }}
        >
            <div
                style={{
                    width: '100%',
                    height: '300px',
                    backgroundColor: 'red',
                    filter: 'invert(15%) sepia(72%) saturate(460%) hue-rotate(78deg) brightness(91%) contrast(84%)',
                    backgroundClip: 'url(https://raw.githubusercontent.com/Forest-Fire-Research/website-assets/main/assets/backgrounds/tree-1.svg)'
                }}
            >
            </div>
            <img 
                sx={{
                }} 
                height='300rem' 
                src="https://raw.githubusercontent.com/Forest-Fire-Research/website-assets/main/assets/backgrounds/tree-1.svg"/>
            <img height='300rem' src="https://raw.githubusercontent.com/Forest-Fire-Research/website-assets/main/assets/backgrounds/tree-2.svg"/>
            <img height='300rem' src="https://raw.githubusercontent.com/Forest-Fire-Research/website-assets/main/assets/backgrounds/tree-3.svg"/>
            <img height='300rem' src="https://raw.githubusercontent.com/Forest-Fire-Research/website-assets/main/assets/backgrounds/tree-4.svg"/>
        </div> */}
    </div>
    )
}

export default Footer;