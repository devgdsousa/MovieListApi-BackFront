import { Request, Response } from "express";
import { prisma } from "./prisma/client";

export const getFilmes = async (req: Request, res: Response) => {
    const filmes = await prisma.filme.findMany({});
    return res.json(filmes);
};

export const createFilme = async (req: Request, res: Response) => {
    const { title, imageURL, amount, describe, time_minutes } = req.body;

    const existingFilme = await prisma.filme.findFirst({
        where: { title: title },
    });

    if (existingFilme) {
        return res.status(400).send("Filme já existe!");
    }

    try {
        const filme = await prisma.filme.create({
            data: { title, imageURL, amount, describe, time_minutes },
        });
        return res.json(filme);
    } catch (error) {
        return res.status(500).status(400).send("Erro ao criar filme." );
    }
};

export const getFilmeById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const filme = await prisma.filme.findUnique({ where: { id: Number(id) } });
    if (!filme) {
        return res.status(404).json({ error: "Filme não encontrado." });
    }
    return res.json(filme);
};

export const updateFilme = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, imageURL, amount, describe, time_minutes } = req.body;
    const filme = await prisma.filme.update({
        where: { id: Number(id) },
        data: { title, imageURL, amount, describe, time_minutes },
    });
    return res.json(filme);
};

export const deleteFilme = async (req: Request, res: Response) => {
    const { id } = req.params;
    await prisma.filme.delete({ where: { id: Number(id) } });
    return res.send("Filme deletado!");
};
