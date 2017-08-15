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
dataMenu      = require('data').menu,
quotes        = require('data').quotes;

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
                
                <ViewHome />
                <ViewProfile />
            	
                <Quote {...quotes[0]} />
                <ViewBio />

                <Quote {...quotes[1]} />
                <ViewSkills />
                
                <Quote {...quotes[2]} />
                <ViewPortfolio />

                <Quote {...quotes[3]} />
                <ViewContact />
            </div>
        );
    }
}

module.exports = Main;
