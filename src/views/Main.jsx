var
BG            = require('BG'),
Menu          = require('Menu'),
Quote         = require('Quote'),
React         = require('react'),
ViewBio       = require('./bio'),
ViewContact   = require('./contact'),
ViewHome      = require('./home'),
ViewPortfolio = require('./portfolio'),
ViewProfile   = require('./profile'),
ViewSkills    = require('./skills'),
dataApp       = require('../data'),
dataMenu      = dataApp.menu;

class Main extends React.Component {
    render(){
        return (
            <div>
                 <BG />

                <Menu 
                items={[
                    dataMenu.home,
                    dataMenu.profile,
                    dataMenu.biography,
                    dataMenu.skills,
                    dataMenu.portfolio,
                    dataMenu.contact,    
                ]}/>
                
                <ViewHome
                    sectionConf= { dataMenu.home }
                    gotoLink   = { dataMenu.profile.id }
                />
    
                <ViewProfile
                    sectionConf= { dataMenu.profile }
                />
            	
                <Quote {...dataApp.quotes[0]} />
                <ViewBio 
                    sectionConf= { dataMenu.biography }
                    bioList    = { dataApp.bio }
                />

                <Quote {...dataApp.quotes[1]} />
                <ViewSkills 
                    sectionConf= { dataMenu.skills }
                    skillsList = { dataApp.skills }
                />
                
                <Quote {...dataApp.quotes[2]} />
                <ViewPortfolio sectionConf = { dataMenu.portfolio } />

                <Quote {...dataApp.quotes[3]} />
                <ViewContact />
            </div>
        );
    }
}

module.exports = Main;



/*

🦄 Menu
🐧 Home
🐧 Profile
🌟 Skills
🐧 Portfolio
📩 Contact
🐧 Bio
💬 Quote
👾🍆🌵🐔⛄
🙊
*/
