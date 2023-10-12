// PrismaClientをインポートします。PrismaClientはPrismaを使用してデータベースとの通信を行うためのクライアントです。
import { PrismaClient } from '@prisma/client';

// グローバルスコープにPrismaClientのインスタンスを定義します
declare global {
  var prisma: PrismaClient | undefined;
}
// グローバルスコープにPrismaClientのインスタンスがすでに存在するかどうかをチェックし、存在しない場合は新しいインスタンスを作成します。
const prisma = global.prisma || new PrismaClient();

// 開発環境でのみ、グローバルスコープにPrismaClientのインスタンスを保存します。
if (process.env.NODE_ENV === 'production') global.prisma = prisma;

export default prisma;
