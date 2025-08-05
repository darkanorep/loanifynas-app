const resolvers = {
    Query: {
        users: () => {
            return [
                {
                    id: '1',
                    first_name: 'Admin',
                    last_name: 'User',
                    email: 'admin@loanifynas.com'
                }
            ]
        }
    }
};

module.exports = {resolvers};