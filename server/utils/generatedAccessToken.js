import jwt from 'jsonwebtoken';

const generatedAccessToken = (userId) => {
    try {
        const token = jwt.sign(
            { id: userId },
            process.env.SECRET_KEY_ACCESS_TOKEN,
            { expiresIn: '96h' }
        );

        return token;
    } catch (error) {
        console.error('Error generating access token:', error);
        throw new Error('Token generation failed');
    }
};

export default generatedAccessToken;
