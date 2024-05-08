import { prismaClient } from "../index.js";
import { hashSync, compareSync } from "bcrypt";
import jwt from "jsonwebtoken";
import { BadRequestException } from "../exceptions/bad-request.js";
import { ErrorCodes } from "../exceptions/root.js";
import { LoginSchema, SignUpSchema } from "../schema/users.js";
export const SignUp = async (req, res, next) => {
    const { email, password, name } = req.body;
    SignUpSchema.parse(req.body);
    let user = await prismaClient.user.findFirst({
        where: {
            email: email,
        },
    });
    if (user) {
        next(new BadRequestException("User Not Found!", ErrorCodes.USER_ALREADY_EXISTS));
    }
    else {
        let user = await prismaClient.user.create({
            data: {
                email: email,
                password: hashSync(password, 15),
                name: name,
            },
        });
        return res.status(201).json({ user: user, message: "Created" });
    }
};
export const Login = async (req, res, next) => {
    const { email, password } = req.body;
    LoginSchema.parse(req.body);
    let user = await prismaClient.user.findFirst({
        where: {
            email: email,
        },
    });
    if (!user) {
        next(new BadRequestException("User Not Found!", ErrorCodes.USER_ALREADY_EXISTS));
    }
    else if (!compareSync(password, user.password)) {
        next(new BadRequestException("Incorrect Password", ErrorCodes.INCORRECT_PASSWORD));
    }
    let token = jwt.sign({
        userId: user.id,
    }, process.env.JWT_SECRET, { expiresIn: "3h" });
    return res
        .status(201)
        .json({ user: user, message: "Signed in", token: token });
};
//# sourceMappingURL=auth.js.map