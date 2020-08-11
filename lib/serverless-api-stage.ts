import { CfnOutput, Construct, Stage, StageProps } from '@aws-cdk/core';
import { ApiStack } from './api-stack';

//Deployable unit of web service app
export class ServerlessApiStage extends Stage {
    public readonly urlOutput: CfnOutput;

    constructor(scope: Construct, id: string, props?: StageProps) {
        super(scope, id, props);

        const service = new ApiStack(this, 'ServerlessApi');

        // Expose ApiStack's output one level higher
        this.urlOutput = service.urlOutput;
    }
}