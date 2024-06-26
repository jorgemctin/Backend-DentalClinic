const isAdmin = (req, res, next) => {
    try {
        if (req.role_id !== 2) {
            return res.status(403).json({
                success: false,
                message: "You need Admin permissions"
            });
        }
        
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "You need Admin permissions",
            error: error
        });   
    }
}

module.exports = isAdmin;