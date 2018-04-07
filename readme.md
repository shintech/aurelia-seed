## Aurelia Seed

### Synopsis

Aurelia + Postgres + Express + Node 8

### Installation

    ./install.sh
    
### Usage 

#### Development
    
    npm run watch
    npm run webpack
    npm run dev
    
#### Production

##### /shintech/aurelia-deploy
    
    git clone https://github.com/shintech/aurelia-deploy
    cd aurelia-deploy
    docker-compose pull
    docker-compose up -d

    
### Notes 

    #Edit /etc/postgresql/9.4/main/pg_hba.conf 
    
    local   all             postgres                                trust #peer
    
    #######################################################################
    
    sudo -u postgres psql -c "ALTER USER postgres PASSWORD 'postgres';"
    psql -f db.sql -U postgres
    
#### TODO

- [ ] repeat.for -> images in about.html