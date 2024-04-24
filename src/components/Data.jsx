
import img from "../assets/hero/ben-modified.png"
import git from "../assets/hero/github.svg"
import linkedin from "../assets/hero/Linkedln.svg"
import javascript from "../assets/skills/js.svg"
import react from "../assets/skills/react.svg"
import redux from "../assets/skills/redux.svg"
import node from "../assets/skills/node.svg"
import vscode from "../assets/skills/vscode.svg"
import figma from "../assets/skills/figma.svg"
import projecktImg1 from "../assets/projects/projects-1.svg"
import projecktImg2 from "../assets/projects/projects-2.svg"


export const data= {
    en: {
        modeData: {
          darkModeLabel: 'Dark Mode',
          translationText: 'Translate into Turkish',
        },
        headerData: {
            name:"Aybüke",
        },
        heroData: {
            role: 'I am a Frontend Developer...',
            description:
              "...who likes to craft solid and scalable frontend products with great user experiences.",
            githubLink: 'https://github.com/Aybuke-Filiz',
            githubLabel: 'GitHub',
            linkedinLink: 'https://www.linkedin.com/in/gokceaybukeyavuz/',
            linkedinLabel: 'LinkedIn',
            heroImage: img,
            githubIcon: git,
            linkedinIcon: linkedin,
          },
          skillData: {
            title: 'Yetenekler',
            javascriptLabel:"JAVASCRIPT",
            reactLabel:"REACT",
            reduxLabel:"REDUX",
            nodeLabel:"NODE",
            vscodeLabel:"VS CODE",
            figmaLabel:"FIGMA",
            javascriptIcon:javascript,
            reactIcon:react,
            reduxIcon:redux,
            nodeIcon:node,
            vscodeIcon:vscode,
            figmaIcon:figma,
          },
          profileData: {
            title: 'Profil',
            details: [
              {
                label: 'Doğum Tarihi',
                value: '17.08.1999',
              },
              {
                label: 'İkamet Şehri',
                value: 'İzmir',
              },
              {
                label: 'Eğitim Durumu',
                value: 'Manisa Celal Bayar Üniversitesi İnşaat Müh. Lisans 2022',
              },
              {
                label: 'Tercih Ettiği Rol',
                value: 'Ön Uç',
              },
            ],
            aboutMe: {
              title: 'Hakkımda',
              description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.
              Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam! 
              `,
            },
          }, 
          projectTitle: 'Projelerim',
          projecktsData: [
            {
              bigTitle: 'projelerim',
              title: 'Workintech',
              description:
                'Basit, özelleştirilebilir, minimal bir kurulum çerez eklentisi. Kullanıcılarınızın kabul etmek veya reddetmek istediği çerezleri seçmelerine izin verir. Bu, vanilla JS, SCSS ve Parcel Bundler ile oluşturulmuştur ve NPM paketi olarak mevcuttur. Git deposu, kod ve temalar üzerinde her türlü özelleştirmeye izin verir.',
              technologies: ['React', 'Redux', 'Vercel'],
              image: projecktImg1,
              githubLink: 'https://github.com/Aybuke-Filiz',
              linkedinLink: 'https://www.linkedin.com/in/gokceaybukeyavuz/',
            },
            {
              title: 'Journey',
              description:
                'Basit, özelleştirilebilir, minimal bir kurulum çerez eklentisi. Kullanıcılarınızın kabul etmek veya reddetmek istediği çerezleri seçmelerine izin verir. Bu, vanilla JS, SCSS ve Parcel Bundler ile oluşturulmuştur ve NPM paketi olarak mevcuttur. Git deposu, kod ve temalar üzerinde her türlü özelleştirmeye izin verir.',
              technologies: ['React', 'Redux', 'Vercel'],
              image: projecktImg2,
              githubLink: 'https://github.com/Aybuke-Filiz',
              linkedinLink: 'https://www.linkedin.com/in/gokceaybukeyavuz/',
            },
        ],
                          
}
}