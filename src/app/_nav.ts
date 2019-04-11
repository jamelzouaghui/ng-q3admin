export const navItems = [
    {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-speedometer',
        badge: {
            variant: 'info',
            text: 'NEW'
        }
    },

    {
        title: true,
        name: 'Extras',
    },
    {
        name: 'Pages',
        url: '/pages',
        icon: 'icon-star',
        children: [
            {
                name: 'Login',
                url: '/login',
                icon: 'icon-star'
            },
            {
                name: 'Register',
                url: '/register',
                icon: 'icon-star'
            },
            {
                name: 'Error 404',
                url: '/404',
                icon: 'icon-star'
            },
            {
                name: 'Error 500',
                url: '/500',
                icon: 'icon-star'
            }
        ]
    },
    {
        name: 'Co-Marketing',
        url: '/comarketing',
        icon: 'icon-star',
        children: [
            {
                name: 'Groupes',
                url: '/groupes/groupes',
                icon: 'icon-star'
            },
            {
                name: 'Contacts',
                url: '/contacts/contacts',
                icon: 'icon-star'
            }
        ]
    },
    {
        name: 'Sondage',
        url: '/sondage',
        icon: 'icon-speedometer',
        badge: {
            variant: 'info',
            text: 'NEW'
        }
    },
    {
        name: 'Statistique',
        url: '/statistique',
        icon: 'icon-speedometer',
        badge: {
            variant: 'info',
            text: 'NEW'
        }
    },
    {
        name: 'Exports',
        url: '/comarketing',
        icon: 'icon-star',
        children: [
            {
                name: 'Liste des contacts',
                url: '/exportlistecontacts',
                icon: 'icon-star'
            },
            {
                name: 'Liste des messages',
                url: '/exportlistemessage',
                icon: 'icon-star'
            }
        ]
    },


    {

        name: 'Utilisteurs',
        url: '/users',
        icon: 'icon-puzzle',
        children: [
            {
                name: 'Users',
                url: '/users/users',
                icon: 'icon-puzzle'
            },
            {
                name: 'Groupes',
                url: '/users/groupes',
                icon: 'icon-puzzle'
            },

        ]
    }

];
