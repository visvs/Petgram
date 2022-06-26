import * as React from "react"
import { SVG } from "./style"
import { Link } from 'react-router-dom'

export const Logo = (props) => (
  <Link to='/'>
    <SVG
      width={294.5}
      height={135.2}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="102.75 7.4 294.5 135.2"
      style={{
        background: "0 0",
      }}
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <defs>
        <linearGradient
          id="b"
          x1={0}
          x2={1}
          y1={0.5}
          y2={0.5}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#dc93f8" />
          <stop offset={1} stopColor="#4bdac8" />
        </linearGradient>
        <filter id="a" x="-100%" y="-100%" width="300%" height="300%">
          <feFlood
            floodColor="rgba(10.588235294117643%,2.3529411764705883%,16.07843137254902%,0)"
            result="flood"
          />
          <feComposite
            operator="in"
            in2="SourceAlpha"
            in="flood"
            result="shadow"
          />
          <feOffset dx={-0.3} dy={-4} in="SourceGraphic" result="offset-1" />
          <feOffset dx={0.3} dy={4} in="shadow" result="offset-2" />
          <feMerge>
            <feMergeNode in="offset-2" />
            <feMergeNode in="offset-1" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#a)">
        <path
          d="M14.56 2.13 4.9 1.21q-.28-8.03-.28-19.28 0-11.25.71-30.07 5.96-2.2 12.24-2.2 6.29 0 11.22 4.65 4.94 4.65 4.94 11.72 0 7.06-5.37 12.21Q23-16.61 14.34-14.2q0 7.95.22 16.33Zm6.85-28.9Q24-29.82 24-33.58q0-3.77-1.95-6.11-1.96-2.34-4.37-2.34-.64 0-2.91.35-.36 10.01-.43 19.39 4.48-1.42 7.07-4.48ZM44.8-5.11q2.7 0 5.75-5.19l5.4 3.2q-1.35 2.34-2.59 3.98Q52.11-1.49 49.63 0q-2.49 1.49-5.54 1.49-4.47 0-7.52-3.8-3.06-3.8-3.06-10.26 0-7.38 2.63-13.77 1.42-3.34 4.08-5.43 2.66-2.1 5.47-2.1 2.8 0 4.51.89 1.7.89 2.73 1.99t1.81 3.23q.78 2.13 1.1 3.48.32 1.35.53 3.9.29 3.41.29 6.18-5.68 1.56-14.7 2.84.21 2.84 1 4.54.78 1.71 1.84 1.71Zm1.56-21.8q-1.56 0-2.8 3.12-1.24 3.13-1.46 7.25 3.77-.78 6.54-1.49 0-8.88-2.28-8.88Zm31.67-2.77v6.75q-3.41 0-5.25.07-.22 7.1-.22 23.85L64.18.21q0-12.42.22-22.5-1.07 0-4.05.35l-1.06-5.82q1.7-.36 5.32-.92.14-5.26.57-15.34l8.45.78q-.43 7.03-.64 13.63 1.77-.07 5.04-.07ZM91.87 9.51q2.21 0 3.55-4.5Q96.77.5 96.77-6.18 93.01.57 89 .57t-6.46-2.74q-2.45-2.73-2.45-8.3 0-5.58 1.92-11.08 1.91-5.5 4.72-8.8 2.8-3.3 5.36-3.3 4.47 0 8.23 3.62l4.97.71q-.92 4.61-.92 14.16t-.53 14.06q-.53 4.51-1.74 8.84t-3.55 6.89q-2.34 2.55-6.18 2.55-3.83 0-7.31-3.09-3.48-3.08-5.61-7.42l5.96-2.55q2.77 5.39 6.46 5.39Zm1.99-35.92q-1.77 0-3.58 5.11t-1.81 10.86q0 2.2.6 3.34.6 1.14 1.35 1.14.74 0 1.95-1.42t2.59-4.55q1.39-3.12 2.03-6.89l.14-5.39q-2.06-2.2-3.27-2.2Zm29.96.78q-2.98 0-4.47 7.52.14 4.97.14 9.52 0 4.54-.28 10.22l-8.24-.71q.22-10.43.22-11.5 0-13.13-1.28-20.09l5.32.57q.5 2.05 1.14 3.62 3.48-7.46 7.03-7.46 2.91 0 5.11 2.56l-1.85 6.53q-1.13-.78-2.84-.78Zm7.67 4.68q1.07-5.53 4.05-9.4 2.98-3.87 7.81-3.87t7.13 4.01q2.31 4.01 2.31 11.39 0 7.39-.85 20.38l-5.96-.49-.57-2.28Q142.07.71 138.59.71q-3.48 0-5.75-2.31t-2.27-6.64q0-4.33 4.29-7.45 4.3-3.13 9.91-3.27v-1.91q0-5.61-2.7-5.61-1.35 0-2.45 1.88t-1.6 4.29l-6.53-.64Zm6.32 13.14q0 2.27 2.7 2.27 1.85 0 3.9-.85l.15-5.96q-3.34.28-5.04 1.66-1.71 1.39-1.71 2.88Zm37.35-23.86q4.33 0 6.6 2.99 3.69-5.4 7.31-5.4 9.87 0 9.87 14.84 0 8.38-1.42 20.31l-8.23-.71q1.35-13.28 1.35-20.24 0-6.96-2.28-6.96-.99 0-2.34 3.2-1.35 3.19-1.77 7.1-.15 8.87-.57 15.83l-8.31-.78q.57-10.01.57-16.47 0-6.46-1.78-6.46-1.13 0-2.94 3.94t-2.59 8.27q.07 6.53.63 13.49l-8.3-.78q-.78-10.01-.78-18.25t.42-15.41l5.9.43q.42 1.92 1.2 6.96 3.77-5.9 7.46-5.9Z"
          fill="url(#b)"
          transform="translate(148.22 108.76)"
        />
      </g>
    </SVG>
  </Link>
)

