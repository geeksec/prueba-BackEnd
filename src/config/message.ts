import chalk from 'chalk';

const info = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.info(chalk.cyan(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`, object));
    } else {
        console.info(chalk.cyan(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`));
    }
};

const warn = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.warn(chalk.yellow(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`, object));
    } else {
        console.warn(chalk.yellow(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`));
    }
};

const error = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.error(chalk.red(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`, object));
    } else {
        console.error(chalk.red(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`));
    }
};

const getTimeStamp = (): string => {
    return new Date().toString();
};

export default { info, warn, error };