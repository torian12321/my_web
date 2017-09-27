import React            from 'react';
import PropTypes        from 'prop-types';
import BG               from 'BG';
import Menu             from 'Menu';
import Quote            from 'Quote';
import ViewHome         from './home';
import ViewBio          from './bio';
import ViewContact      from './contact';
import ViewPortfolio    from './portfolio';
import ViewProfile      from './profile';
import ViewSkills       from './skills';

const
dataMenu = require('data').menu,
quotes   = require('data').quotes;

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
