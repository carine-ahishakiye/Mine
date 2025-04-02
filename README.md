# ArtCulture Hub

**ArtCulture Hub** is a digital platform designed to connect African artists with global buyers, providing a marketplace to showcase and sell authentic African artwork. The platform empowers artists by increasing visibility and generating financial opportunities, while offering buyers a diverse collection of unique art pieces. ArtCulture Hub integrates secure payment systems, such as Stripe and PayPal, to facilitate seamless transactions.

---

## Table of Contents
1. [Introduction](#introduction)
2. [Project Description](#project-description)
3. [Features](#features)
4. [Functional Requirements](#functional-requirements)
5. [Installation](#installation)
6. [Usage](#usage)
7. [Technologies](#technologies)
8. [Contributing](#contributing)
9. [License](#license)
10. [Project Status](#project-status)
11. [Contact](#contact)

---

## Introduction

### Purpose
ArtCulture Hub serves as a digital marketplace, offering African artists a platform to showcase their artwork to a global audience. The platform provides tools for artists to manage their profiles, upload artworks, and monitor their sales, while offering buyers an intuitive browsing and purchasing experience. ArtCulture Hub aims to increase the visibility of African art, promote cultural heritage, and create financial opportunities for artists.

### Intended Audience
- **Developers**: Responsible for system implementation and development.
- **Project Managers**: Oversee project development, ensuring timely delivery.
- **Artists**: Upload, showcase, and sell artworks.
- **Buyers**: Browse the marketplace, interact with artists, and purchase artworks.
- **Testers**: Validate the platform’s functionality and stability.

---

## Project Description

ArtCulture Hub is a cloud-based platform (hosted on AWS or DigitalOcean) built to ensure scalability and high availability. It integrates external services like Stripe and PayPal for secure payment processing. The platform includes essential features such as a marketplace, user authentication, artist dashboards, payment processing, and an admin panel.

---

## Features

- **User Authentication**: Secure login via email/password with multi-factor authentication (MFA) and password recovery.
- **Marketplace**: Browse and filter artworks by categories such as price, artist, and style.
- **Artist Dashboard**: Personalized space for artists to manage profiles, upload artworks, set prices, and access sales analytics.
- **Payment Integration**: Secure payment processing via Stripe and PayPal, with encrypted payment data.
- **Admin Panel**: Admins manage user accounts, approve/reject artworks, and oversee transactions.

---

## Functional Requirements

1. **User Authentication**  
   - Support for login via email/password with multi-factor authentication (MFA).
   - Password recovery mechanism for users.

2. **Marketplace Features**  
   - Buyers can browse artworks, filter by categories, price, and artist.
   - Real-time updates to reflect newly uploaded artworks.

3. **Artist Dashboard**  
   - Artists can manage profiles, upload artworks, set prices, and track sales.
   - Analytics for sales performance and buyer interactions.

4. **Payment Integration**  
   - Payments processed securely via Stripe and PayPal.
   - Payment data encrypted, with notifications upon transaction completion.

5. **Admin Panel**  
   - Admins approve/reject artworks, manage users, and monitor transactions.

---

## Installation

### Prerequisites
- **Node.js** and **npm** (Node Package Manager)
- **MongoDB** (either local or a cloud instance like MongoDB Atlas)
- **Stripe** and **PayPal** accounts for payment integration

### Step 1: Clone the Repository
```bash
git clone https://github.com/carine-ahishakiye/Mine.git
cd Mine


Step 2: Install Dependencies
  
  install  npm 

Step 3: Set Up Environment Variables

DB_URL="mongodb+srv://mine2:123!@pressure.knqjxvw.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=mine2"
JWT_SECRET_KEY = 
'f6adc05f12d6270f36400186e75f67f20b41463529a1e50ce5bc5439a5e16154fc067e6c5af65a5f9d136c2497ee3cd7564bebd8e700e8217e752d00c79c65a4'

Step 4: Run the Application

for frontend : npm run dev
for backend: npm run Start:dev

Usage
Once the platform is set up, you can:

Browse the marketplace for available artworks.

Register as an artist to upload and manage your artworks.

Purchase artworks via Stripe or PayPal.

Admins can manage users and approve/reject artwork listings.

Technologies
ArtCulture Hub is built using the following technologies:

Frontend: React.js or Vue.js

Backend: Node.js with Express.js

Database: MongoDB

Payment Integration: Stripe, PayPal

Cloud Hosting: AWS or DigitalOcean

Contributing
We welcome contributions to ArtCulture Hub! To contribute:

Fork the repository.

Create a new branch for your feature or bug fix.

Commit your changes and push them to your fork.

Open a pull request to the main repository.


