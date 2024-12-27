import { Box, Divider, Typography } from "@mui/material";
import * as React from "react";
import {Link} from 'react-router-dom';

const LogoComponent = (props) => {

  return (
    <Link to="/" 
      style={{
        textDecoration: 'none',
      }}
    >
      <Box 
        sx={{
          display: 'flex',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1430 640"
          transform="matrix(-1,0,0,1,0,0)"
          style={{
            fill: "#000",
          }}
          {...props}
          width="50"
        >
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="a"
            x1={70}
            x2={500}
            y1={200}
            y2={200}
          >
            <stop
              offset={0}
              style={{
                stopColor: "#00c714ff",
              }}
            />
            <stop
              offset={1}
              style={{
                stopColor: "#000000cc",
              }}
            />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="b"
            x1={100}
            x2={600}
            y1={900}
            y2={900}
          >
            <stop
              offset={0}
              style={{
                stopColor: "#7cea00ff",
              }}
            />
            <stop
              offset={1}
              style={{
                stopColor: "#ffffff00",
              }}
            />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="c"
            x1={100}
            x2={600}
            y1={200}
            y2={100}
          >
            <stop
              offset={0}
              style={{
                stopColor: "#00c714ff",
              }}
            />
            <stop
              offset={1}
              style={{
                stopColor: "#ffffff00",
              }}
            />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="d"
            x1={100}
            x2={600}
            y1={700}
            y2={700}
          >
            <stop
              offset={0}
              style={{
                stopColor: "#7cea00ff",
              }}
            />
            <stop
              offset={1}
              style={{
                stopColor: "#000000cc",
              }}
            />
          </linearGradient>
          <path
            d="M500 0c50 100-309 250-425 310v13c0 25 10 45 23 61C458 230 570 130 500 0"
            fill="url(#a)"
            transform="rotate(-90 320 320)"
          />
          <path
            clipRule="evenodd"
            d="M540 95c-25 124-270 240-435 307 20 15 45 35 75 50C510 307 600 201 541 77c0 5 0 10-2 15"
            fillRule="evenodd"
            fill="url(#a)"
            transform="rotate(-90 320 320)"
          />
          <path
            clipRule="evenodd"
            d="M315 640C105 551-10 451 55 326c13 244 680 214 570 644-18-190-170-258-308-330"
            fillRule="evenodd"
            style={{
              fill: "url(#b)",
            }}
            transform="rotate(-90 320 320)"
          />
          <path
            clipRule="evenodd"
            d="M20 400c30 270 710 250 555 666-35-361-705-371-555-666"
            fillRule="evenodd"
            style={{
              fill: "url(#b)",
            }}
            transform="rotate(-90 320 320)"
          />
          <path
            d="M500 0c50 100-309 250-425 310v13c0 25 10 45 23 61C458 230 570 130 500 0"
            fill="url(#c)"
            transform="rotate(-90 500 140)"
          />
          <path
            clipRule="evenodd"
            d="M540 95c-25 124-270 240-435 307 20 15 45 35 75 50C510 307 600 201 541 77c0 5 0 10-2 15"
            fillRule="evenodd"
            fill="url(#c)"
            transform="rotate(-90 500 140)"
          />
          <path
            clipRule="evenodd"
            d="M315 640C105 551-10 451 55 326c13 244 680 214 570 644-18-190-170-258-308-330"
            fillRule="evenodd"
            style={{
              fill: "url(#d)",
            }}
            transform="rotate(-90 500 140)"
          />
          <path
            clipRule="evenodd"
            d="M20 400c30 270 710 250 555 666-35-361-705-371-555-666"
            fillRule="evenodd"
            style={{
              fill: "url(#d)",
            }}
            transform="rotate(-90 500 140)"
          />
        </svg>
        <Divider 
          orientation="vertical" 
          variant="inset" 
          flexItem 
          sx={{ 
            borderRightWidth: 3,
            marginLeft: 1,
            bgcolor: "secondary.main"
          }} 
        /> 
        <Box 
          sx={{ 
            marginLeft: 1,
            color: "secondary.main",
            zIndex: 999,
          }} 
        >
          <Typography 
            sx={{
              fontFamily: 'Chewy',
              marginBottom: -2
            }}
            variant="h6"
          >
            WiRe AI
          </Typography>
          <Typography 
            sx={{
              fontFamily: 'helvetica',
              color: 'white',
              fontSize: '0.5rem'
            }}
            variant="caption"
          >
            Research Group
          </Typography>
        </Box>
      </Box>
    </Link>
  );
}
export default LogoComponent;
