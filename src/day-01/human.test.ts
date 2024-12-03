import { describe } from "vitest";
import { reconcileLocationIdLists } from "./human";
import { testReconcileLocationIdLists } from "./reconcileLocationIdListsTestCases";

describe("reconcileLocationIdLists - human", () => {
    testReconcileLocationIdLists(reconcileLocationIdLists);
});
