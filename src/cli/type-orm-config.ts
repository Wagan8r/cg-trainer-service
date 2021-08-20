import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { CONFIG_SERVICE } from '../config';
import { TypeOrmConfigService } from '../type-orm';

const typeOrmConfigService: TypeOrmConfigService = new TypeOrmConfigService(CONFIG_SERVICE);
const typeOrmConfig: Promise<TypeOrmModuleOptions> = typeOrmConfigService.createTypeOrmOptions();
export = typeOrmConfig;
