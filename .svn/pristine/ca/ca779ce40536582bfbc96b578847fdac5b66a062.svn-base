import { fetch,post } from '@/utils/fetch';

const agentShare = (shareId) => fetch('agent/v1/app/share',{
	shareId: shareId
});

const agentAgree = (storeId,getCurrStore=1) => fetch('store/v1/app/storename',{
	storeId:storeId,
	getCurrStore:getCurrStore
});

const agentGoods = (shareId,goodsSkuIds) => post('agent/v1/app/goods',{
	shareId:shareId,
	goodsSkuIds:goodsSkuIds
});

const agentInfo = (storeId) => fetch('account/v1/app/iminfo',{
	storeId:storeId
});

export default {
	agentShare,
	agentAgree,
	agentGoods,
	agentInfo
};