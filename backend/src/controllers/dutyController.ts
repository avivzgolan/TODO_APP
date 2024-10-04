import { Request, Response } from "express";
import * as dutyModel from "../models/dutyModel";

export const getAllDuties = async (req: Request, res: Response) => {
  try {
    const duties = await dutyModel.getDuties();
    res.json(duties);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch duties" });
  }
};

export const getDutyById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const duty = await dutyModel.getDutyById(id);
    if (duty) {
      res.json(duty);
    } else {
      res.status(404).json({ error: "Duty not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch duty" });
  }
};

export const createDuty = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    if (!name) {
      res.status(400).json({ error: "Duty name is required" });
      return;
    }
    const newDuty = await dutyModel.createDuty(name);
    res.status(201).json(newDuty);
  } catch (err) {
    res.status(500).json({ error: "Failed to create duty" });
  }
};

export const updateDuty = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedDuty = await dutyModel.updateDuty(id, name);
    if (updatedDuty) {
      res.json(updatedDuty);
    } else {
      res.status(404).json({ error: "Duty not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to update duty" });
  }
};

export const deleteDuty = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await dutyModel.deleteDuty(id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: "Failed to delete duty" });
  }
};
