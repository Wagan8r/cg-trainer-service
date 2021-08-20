import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { TrainerEntity } from './trainer.entity';
import { EntityRepository } from 'typeorm';

@EntityRepository(TrainerEntity)
export class TrainerRepository extends BaseRepository<TrainerEntity> {}
