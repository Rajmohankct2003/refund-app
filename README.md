# Invoice Refund App
A React application
# Table of Contents
1. [Functionality](#Functionality)
2. [Features](#Features)
3. [Setupproject](#Setupproject)
4. [Installation](#Features)
5. [Runaplication](#Runaplication)
6. [TestedBrowser](#TestedBrowser)
7. [AreasOfImprovement](#AreasOfImprovement)

<a name="Functionality"></a>
# Functionality
The APP shows an overview of invoice registrations.

<a name="Features"></a>
# Features
1. When starting the
application for the first time, the overview is empty.
2. Invoice registration data is stored
in memory only and may be lost after restarting.
3. More registrations can be added to the overview by the user in the following way. The app allow the user to register invoice data from a QR code. The app reads the QR code through the camera of the user's device.
4. After reading the data, the app asks the user whether they wish for the invoice to be refunded and what percentage of the full invoice amount (including VAT) should be refunded. For example: a 100% refund of an invoice with 100 EUR before tax and 21 EUR Value Added Tax refunds 121 EUR.
5 .The invoices are be added to the aforementioned overview, including a visual
indicator which reveals which invoices have been refunded for which percentage.

<a name="Setupproject"></a>
# Setup of the project
Clone the repository by using the following command.

git clone https://github.com/kumkumsingh/refund-app.git

cd to the folder refund-app.

cd refund-app

<a name="Installation"></a>
# Installation
Give the following command in the command line.

 `npm i`
<a name="Runaplication"></a>
# Run the project on localhost
Give the following command for running in localhost.

 `npm run start`

<a name="TestedBrowser"></a>
## This APP is tested on GoogleChrome and SafariBrowser
## App is tested on MAC os catalina version 10.15.3

<a name="AreasOfImprovement"></a>
### Redundancy in the css file can be reduced with the use of Sass library.