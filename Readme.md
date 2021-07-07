## Stack Overflow Clone

A stack overflow clone that covers all the minimal required to serve the purpose

# Feature Set
- Users can log in And registration with their email and password
- Anyone can see a list of questions asked by other users or by themselves
- Users can reply with answers to any question they want
- Users can up-vote or down-vote a question
- Users can up-vote or down-vote a reply
- Users can filter questions by tags
- Support markdown language

## DB Diagram
![image](https://cdn-images-1.medium.com/max/1000/1*IJOH2Xm0M_dIpqGW-W3SHQ.png)


## Folder Structure
```
.
├── Next
│   ├── components
│   ├── Dockerfile
│   ├── helper
│   ├── next.config.js
│   ├── package.json
│   ├── package-lock.json
│   ├── pages
│   ├── redux
│   └── styles
├── package.json
├── package-lock.json
├── Readme.md
└── server
    ├── config
    ├── controllers
    ├── Dockerfile
    ├── helper
    ├── index.js
    ├── middlewares
    ├── models
    ├── package.json
    ├── package-lock.json
    └── routes
```

## Final Product Images
![image](https://cdn-images-1.medium.com/max/1500/1*DjGWYYmt-ZFTM0dpK-aNNA.png)
![image](https://cdn-images-1.medium.com/max/1500/1*F86Q0tD1WjnJ-a5cMIwdKQ.png)


## Demo
[Checkout Demo here](https://stack-overflow-1di516p32.vercel.app/)

## Steps to setup

```
git clone https://github.com/roopamgarg/stack-overflow.git
cd ntest
npm i
npm run setup
npm run dev

visit http://localhost:3000/ in your browser
```