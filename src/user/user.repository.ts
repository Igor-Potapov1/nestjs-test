import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRoot } from './user.model';
import { UserDocument } from './user.schema';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel('User') private readonly model: Model<UserDocument>,
  ) {}

  async findAll() {
    const docs = await this.model.find().exec();
    const userRoot = new UserRoot(undefined);
    userRoot.setData(docs);
    userRoot.foundUser();
    return userRoot;
  }

  async createOne(dto: CreateUserDto) {
    const doc = await this.model.create(dto);
    const userRoot = new UserRoot(doc.id);
    userRoot.setData(doc);
    return userRoot;
  }
}
