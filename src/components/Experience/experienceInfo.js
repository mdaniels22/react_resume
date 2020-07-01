import React from "react";
import ExperienceDisplay from "./experienceDisplay";

const experienceInfo = (props) => {
  const workList = [
    {
      workLink: "https://www.nationalharbor.com/gaylord-national/",
      workLocation: "Gaylord National Harbor Convention Center & Resort",
      workCity: "National Harbor, MD",
      workTitle: "Property Systems Technician ",
      workDescription:
        "Consulting with upper management and IT Director to determine weekly and monthly goals for the department.Installing, maintaining, and upgrading ESX Servers utilizing vSphere Client and vCenter ServerInstalling and troubleshooting Windows 10 desktops and laptops for entire property.Responsible for the upgrade of all Aruba Access Points for staff members.Providing Network & Desktop duties as needed.",
    },
    {
      workLink: "",
      workLocation: "",
      workCity: "",
      workTitle: "Network & Desktop Technician",
      workDescription:
        "Consulting daily with clients to specify system requirements and design solutions.Deploying, configuring, troubleshooting and maintaining workstations and other types of equipment (desktops, mobile devices, and Point of Sale POS stations, Kiosks, Atlas time clocks).Supporting and troubleshooting all network printers, scanners, telephones, and Polycoms.Configuring network ports on all network switches in convention center, meeting rooms, administrative offices, and outdoor areas.Installing CAT5, CAT6, CAT3, fiber, and coaxial cables throughout the convention center and meeting rooms.Troubleshooting wireless and wired issues throughout the convention center, meeting rooms, guest rooms, administrative offices, and outdoor areas.Utilizing Active Directory by adding, removing, and modifying Users, Groups, Computers, and Printers services and permissions, based off policy and procedures. ",
    },
    {
      workLink: "",
      workLocation: "",
      workCity: "",
      workTitle: "Event Services",
      workDescription:
        "Creating precise and timely delivery of conference events, while providing great customer service to guest and clients.Maintaining a safe, clean, and well organized working environment for fellow staff and guests. ",
    },
    {
      workLink: "",
      workLocation: "Independent Contractor",
      workCity: "MD Local Churches & Small Businesses",
      workTitle: "Network/Systems Admin",
      workDescription:
        "Providing Desktop/Network Support including installing, maintaining, and troubleshooting of network and computer hardware.Managing domain users, computers in Microsoft Active Directory on MS Small Business Server environments.Performing regular backups and patching on Domain Server/Desktops.Performing Helpdesk Services by being primary contact for all software/ hardware issues, and resolving or escalating issues to proper contact.Maintaining and troubleshooting Android phones and tablets for users. ",
    },
    {
      workLink: "https://www.bioclinica.com/",
      workLocation: "BioClinica Inc.",
      workCity: "King of Prussia, PA",
      workTitle: ".NET Forms Developer",
      workDescription:
        "Developing case report forms using Visual Basic.NET 2003 (VB.NET) with an SQL database.Carrying out the SDLC by implementing design, development, and maintenance of the study structure.Training incoming Forms Designers by creating instructional documents, with MS Word and MS PowerPoint, and performing demonstrations with VB.NET. Special Project: Designed and produced an application for documenting and graphing a timeline of clients’ SDLC, using MS Excel, utilized by Senior Management. ",
    },
  ];

  return <ExperienceDisplay workList={workList} />;
};

export default experienceInfo;
