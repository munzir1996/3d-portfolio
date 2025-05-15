import {
    mobile,
    backend,
    creator,
    web,
    waqaf,
    typescript,
    vue,
    angular,
    reactjs,
    php,
    tailwind,
    laravel,
    net,
    sql,
    git,
    epicor,
    docker,
    omega,
    ctc,
    future,
    akwad,
    manih,
    fleet,
    oracle,
    shagaf,
    taseti,
    store,
    digitech,
    scientia,
    minute,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "DevOps Engineer",
      icon: creator,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Application Developer",
      icon: mobile,
    },
  ];
  
  const technologies = [
    {
      name: "Vue JS",
      icon: vue,
    },
    {
      name: "Angular JS",
      icon: angular,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Laravel",
      icon: laravel,
    },
    {
      name: ".Net",
      icon: net,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Oracle",
      icon: oracle,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "EPICOR",
      icon: epicor,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "Omega Team",
      icon: omega,
      iconBg: "#E6DEDD",
      date: "Aug 2018 - Feb 2019",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "PHP Developer",
      company_name: "Akwad",
      icon: akwad,
      iconBg: "#383E56",
      date: "Mar 2019 - Sep 2019",
      points: [
        "Developed and maintained websites and systems as a PHP Developer at Akwad Company.",
        "Collaborated with cross-functional teams to design and implement website development projects.",
        "Utilized PHP programming language to create efficient and user-friendly websites.",
        "Conducted regular maintenance and updates to ensure optimal performance and functionality.",
        "Demonstrated strong problem-solving skills in troubleshooting and resolving technical issues.",
      ],
    },
    {
      title: "Software Developer",
      company_name: "Future Investment",
      icon: future,
      iconBg: "#E6DEDD",
      date: "Sep 2019 - Feb 2023",
      points: [
        "Provided remote maintenance and support for software projects, ensuring smooth operation and resolving any issues promptly.",
        "Developed and maintained websites and systems, delivering high-quality solutions that met client requirements and enhanced user experience.",
        "Conducted comprehensive research and analysis to identify and address root causes of operational issues, resulting in improved efficiency and performance.",
        "Gathered detailed requirements from stakeholders for software projects, ensuring alignment with business needs and objectives.",
        "Conducted thorough analysis of software, identifying areas for improvement and implementing solutions to enhance functionality and user satisfaction.",
        "Followed industry best practices and coding standards to ensure the delivery of clean, efficient, and reliable software solutions.",
        "Stayed updated with the latest trends and technologies in software development, continuously enhancing skills and knowledge to deliver cutting-edge solutions.",
      ],
    },
    {
      title: "Software Developer",
      company_name: "CTC Group",
      icon: ctc,
      iconBg: "#383E56",
      date: "Jun 2022 - Present",
      points: [
        "Spearheaded a comprehensive research initiative, utilizing data-driven methods and conducting market analysis, to identify areas for improvement and optimize business processes.",
        "Provided support for software projects, ensuring smooth operation and timely resolution of issues.",
        "Collaborated with cross-functional teams to develop and maintain software applications, adhering to best practices and industry standards.",
        "Played a key role in the support and development of the Epicor ERP System, enhancing its functionality and efficiency.",
        "Conducted thorough analysis of software applications, identifying areas for improvement and implementing necessary changes.",
        "Applications & System Development.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Waqaf",
      description:
        "A technical system for Endowment Management and customer service.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: waqaf,
      source_code_link: "https://waqaf.munzir-dev.top/login",
    },
    {
      name: "Manih",
      description:
        "A scientific technical system to direct grants to the best recipients in accordance with Sharia objectives.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: manih,
      source_code_link: "https://manih.munzir-dev.top/login",
    },
    {
      name: "Quick",
      description:
        "A Fleet Managment System.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: fleet,
      source_code_link: "https://quick.munzir-dev.top/",
    },
    {
      name: "Shagaf",
      description:
        "The Shaghaf platform is a website that provides support services for Freelancing Platform.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: shagaf,
      source_code_link: "https://shaghf-helpdesk.munzir-dev.top/",
    },
    {
      name: "Taseti",
      description:
        "Streaming Platform is suitable for music, videos, Series, Movies.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: taseti,
      source_code_link: "https://taseti.mobi/",
    },
    {
      name: "3minute",
      description:
        "3Minute App Taxi is a fast and reliable ride-hailing service.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: minute,
      source_code_link: "https://3minute.sa/",
    },
    {
      name: "Store",
      description:
        "A Simple UI Dashboard for recieving orders and assigning it to drivers.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: store,
      source_code_link: "https://store.munzir-dev.top/",
    },
    {
      name: "DigiTech",
      description:
        "Suppliers & Sales app for delivering LG products and sales.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: digitech,
      source_code_link: "https://assets.visualcv.com/assets/3229333/DigiTech.pdf",
    },
    {
      name: "Scientia",
      description:
        "A System for managing a Gold Company Operations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: scientia,
      source_code_link: "https://assets.visualcv.com/assets/2529187/Scientia.pdf",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };